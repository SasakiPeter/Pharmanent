import { connect } from 'react-redux';
import BoardList from '../components/Organisms/BoardList';

const mapStateToProps = state => {
    return {
        boards: state.boards,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(counterModule.increment()),
        decrement: () => dispatch(counterModule.decrement()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);