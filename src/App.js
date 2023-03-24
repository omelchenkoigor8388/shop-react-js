import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул сірий',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 4,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 5,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        }
      ]
    }
  }
  render () {
    return (
      <div className="wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
