import React from "react";
import PropTypes from "prop-types";
import styles from './Table.module.css';
import '../../App.css';

const Table = (props) => {
	const { headers, blueHeader, noBorderBottom, noPadding, noHeader, data, keys } = props;
	return (
			<table className='table'>
				{!noHeader &&
					<thead className={`table__head ${blueHeader && 'blue-header'}`}>
						<tr>
							{headers.map(val => {
								return <th key={val} accessKey={val}>{val.toUpperCase()}</th>
							}
							)}
						</tr>
					</thead>
				}
				<tbody className="table__body">
					{renderTableData(data, keys)}
				</tbody>
			</table>
	)

	function renderTableData(data, keys) {
		return data.map((item, idx) => {
			return (
					<tr key={idx} className={`${noBorderBottom && 'noBorderBottom'}`}>
						{!keys &&
							Object.keys(item).map((key, idx) => {
								return <td key={idx} className={`${noPadding && 'noPadding'}`}>{item[key]}</td>;
							})}
						{keys &&
							keys.map((key) => {
								return <td>{item[key]}</td>;
							})}
					</tr>
			);
		});
	}
}

Table.defaultProps = {
	blueHeader: "",
	noHeader: "",
	headers: [],
	data: [],
	keys: false
}
Table.propTypes = {
	headers: PropTypes.array,
	blueHeader: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	]),
	noHeader: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	]),
};
export default Table;
