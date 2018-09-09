import { connect } from 'react-redux';
import * as counterModule from '../modules/Counter';
// import Counter from '../components/molecules/Counter';


// const mapStateToProps = state => {
//     // ここで、count:state.counter.countとするのとどちらがいいのか
//     // この場合はcomponentで取り出すときに、cuunter.countとしている
//     return {
//         counter: state.counter,
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch(counterModule.increment()),
//         decrement: () => dispatch(counterModule.decrement()),
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// HOC使おう
export default (Component) => {
    const mapStateToProps = state => {
        return {
            counter: state.counter,
        }
    }
    const mapDispatchToProps = dispatch => {
        return {
            increment: () => dispatch(counterModule.increment()),
            decrement: () => dispatch(counterModule.decrement()),
        }
    };
    return connect(mapStateToProps, mapDispatchToProps)(Component);
}