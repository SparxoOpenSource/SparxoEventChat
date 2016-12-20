import App from '../components/App';
import { connect } from 'react-redux';
import actions from '../actions';

const mapStateToProps = (state) => {
    return {
        events: state.loadEvents.events,
        isLoading: state.loadEvents.isLoading,
        error: state.loadEvents.error
    };
}

const mapActionToDispatch = actions.eventActions;

export default connect(mapStateToProps, mapActionToDispatch)(App)