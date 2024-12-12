import { useDispatch, useSelector } from 'react-redux';
import { subscribe, unsubscribe } from './SubscribeSlice';

function App() {
  const dispatch = useDispatch();
  const isSubscribed = useSelector(state => state.subbed);

  return (
    <div className="App">
      <h1>Current State: {isSubscribed ? 'Subscribed' : 'Not Subscribed'}</h1>
      <button onClick={() => dispatch(subscribe())}>Subscribe</button>
      <button onClick={() => dispatch(unsubscribe())}>Unsubscribe</button>
    </div>
  );
}

export default App;
