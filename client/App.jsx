import React from 'react';
import Greeter from './Greeter.jsx'
import Taco from './Taco.jsx'

function App() {
    return (
        <div>
          <Greeter location='Impact Fellowship'/>
          <Taco image='http://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201503-xl-tacos-al-pastor.jpg?itok=i3hQ9X1W' name='Al Pastor'/>

        </div>
    )
}

export default App;


