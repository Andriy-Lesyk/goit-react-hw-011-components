import PropTypes from 'prop-types';
import {
  Container,
  Name,
  Menu,
  Item,
  Label,
  Percent,
} from './Statistic.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Name>{title}</Name>}
      <Menu>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{
              backgroundColor:
                '#' +
                (Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase(),
            }}
          >
            <Label>{label}</Label>
            <Percent>{percentage}%</Percent>
          </Item>
        ))}
      </Menu>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
