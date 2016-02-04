import {RowList} from './RowList';
import ReactDOM from 'react-dom';

module.exports.RenderApp = (data) => {
    ReactDOM.render(<RowList rows={data} />, document.getElementById('RenderBody'));
};
