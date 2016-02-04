import {Row} from './Row';

module.exports.RowList = React.createClass({
  render: function() {
    const createRow = function(row, index) {
      return <Row key={index} data={row} />;
    };
    return <div>{this.props.rows.map(createRow)}</div>;
  }
});
