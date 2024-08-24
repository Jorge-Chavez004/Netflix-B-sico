import Header from "../../components/Header/Header";
import './DPindex.css';

export default function DetallePage(){
    const divStyle = {
        display: 'flex',
        width: '400px',
        width: '100%'
    }


    return (
        <>
            <Header />
            <section id="dark-section">
                <div className="divLeft"> 
                    <h1 className="parrafo-data">Bakemonogatari</h1>
                    <div style={divStyle}>
                        <p className="parrafo-data">    2009    |</p>
                        <p className="parrafo-data">    10 temporadas   |</p>
                        <p className="parrafo-data">    Mystery, Romance, Supernatural</p>
                    </div>
                    
                    <p className="parrafo-des">
                    Koyomi Araragi, a third-year high school student, manages to survive a vampire attack with the help of Meme Oshino, a strange man residing in an abandoned building. Though being saved from vampirism and now a human again, several side effects such as superhuman healing abilities and enhanced vision still remain. Regardless, Araragi tries to live the life of a normal student, with the help of his friend and the class president, Tsubasa Hanekawa.
                   </p>
                </div>
                <div className="image_content">
                    <img 
                        src='https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/72c4a468dee1a04c5d353907748aa012.jpe' 
                        alt="Descripción de la imagen"
                    />
                </div>
            </section>
        </>
    );
}


