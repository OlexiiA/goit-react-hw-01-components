import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (<section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map(({ id, label, percentage, }) => {
                return (
                    <li class="item" key={id}>
                        <span class="label">{label}</span>
                        <span class="percentage">{percentage}</span>
                    </li>
                )
            })}
        </ul>
    </section>)
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        },
    )),
};