import Header from './components/Header/Header'
import Section from './components/Section/Section'

function App() {

  const styleHeader={
    background: 'black',
    width: '100%'
  }

  

  return (
    <>
      <header style={styleHeader}>
        <Header />
      </header>
      <section>
        <Section />
      </section>
    </>
  )
}

export default App
