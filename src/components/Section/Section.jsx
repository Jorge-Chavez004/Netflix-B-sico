import Carrousel from "../Carrousel/Carrousel"
function Section() {
    
    const series =[
        {
            "id": "1",
            "typeId": "1",
            "title": "Bakemonogatari",
            "summary": "Koyomi Araragi, un estudiante de tercer año de secundaria, logra sobrevivir a un ataque de vampiros con la ayuda de Meme Oshino, un hombre extraño que reside en un edificio abandonado. Aunque se salva del vampirismo y ahora es un ser humano nuevamente, aún quedan varios efectos secundarios, como las habilidades curativas sobrehumanas y la visión mejorada. En cualquier caso, Araragi intenta vivir la vida de un estudiante normal, con la ayuda de su amigo y el presidente de la clase, Tsubasa Hanekawa. Cuando su compañero de clase Hitagi Senjougahara cae por las escaleras y es atrapado por Araragi, el niño se da cuenta de que la niña no tiene peso natural. A pesar de las protestas de Senjougahara, Araragi insiste en que la ayude, decidiendo obtener la ayuda de Oshino, el mismo hombre que una vez lo había ayudado con su propia situación. A través de varios cuentos que involucran demonios y dioses Bakemonogatari sigue a Araragi mientras intenta ayudar a aquellos que sufren de enfermedades sobrenaturales.",
            "image":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/72c4a468dee1a04c5d353907748aa012.jpe",
            "rating": "8.32",
            "genre": "Sobrenatural",
            "seasons": "10"
        },
        {
            "id": "2",
            "typeId": "1",
            "title": "Monster",
            "summary": "Dr. Kenzou Tenma, un neurocirujano de élite recientemente comprometido con la hija del director de su hospital, está en camino de ascender en la jerarquía del hospital. Eso es hasta que una noche, un evento aparentemente pequeño cambia Dr. La vida de Tenma para siempre. Mientras se prepara para realizar una cirugía en alguien, recibe una llamada del director del hospital diciéndole que cambie de paciente y, en cambio, realice una cirugía cerebral que salve vidas en un artista famoso. Sus compañeros médicos, fiancée y el director del hospital aplauden su logro; pero debido al cambio, un pobre trabajador inmigrante está muerto, causando al Dr. Tenma tendrá una crisis de conciencia. Entonces, cuando surge una situación similar, el Dr. Tenma se mantiene firme y elige realizar una cirugía en el joven Johan Liebert en lugar del alcalde de la ciudad. Desafortunadamente, esta elección conduce a serias ramificaciones para el Dr. Tenma—perder su posición social siendo uno de ellos. Sin embargo, con la misteriosa muerte del director y otros dos médicos, el Dr. La posición de Tenma es restaurada. Sin evidencia para condenarlo, es liberado y alcanza el puesto de director del hospital. Nueve años después, cuando el Dr. Tenma salva la vida de un criminal, su pasado vuelve a perseguirlo, una vez más, se encuentra cara a cara con el monstruo que operaba. Ahora debe embarcarse en una búsqueda de búsqueda para enmendar los estragos propagados por el que salvó",
            "image":"https://kokorockers.cl/wp-content/uploads/2023/08/monster.jpg",
            "rating": "8.88",
            "genre": "Misterio",
            "seasons": "1"
        },
        {
            "id": "3",
            "typeId": "1",
            "title": "Sayonara Zetsubou Sensei",
            "summary": "Nozomu Itoshiki es un maestro de escuela secundaria tan pesimista que incluso la más pequeña de las desgracias puede enviarlo a un pozo de furiosa desesperación; algunas de estas catástrofes incluso conducen a intentos de suicidio. Sensei Sayonara Zetsubou es una comedia satírica ambientada en la actualidad, que cubre varios aspectos de la vida y la cultura japonesa a través de Nozomu y sus interacciones con sus estudiantes: Kiri Komori, un recluso que se niega a abandonar la escuela; Abiru Kobushi, un enigma que con frecuencia llega a clase con lesiones graves y misteriosas; el hiperoptimista Kafuuka Fuura, el polo opuesto de Nozomu; y varias otras chicas inusuales todos los cuales son tan excéntricos como su maestro.",
            "image":"https://i.pinimg.com/736x/56/3d/62/563d6286a4f3f908f8d9c6826e81d3b7.jpg",
            "rating": "7.85",
            "genre": "Comedia",
            "seasons": "3"
        },
        {
            "id": "4",
            "typeId": "1",
            "title": "Full Metal Panic? Fumoffu",
            "summary": "El sargento Sousuke Sagara regresa a la Escuela Secundaria Jindai para proteger el precioso activo de guerra, Kaname Chidori, de cualquier amenaza. Sin embargo, su falta de habilidades sociales y experiencia en la vida real resultan en situaciones cómicas pero peligrosas, poniendo en peligro la vida escolar pacífica que Kaname anhela. Mientras Sousuke continúa trayendo una amplia gama de armas a la escuela como un medio para resolver amenazas,—real o fake—Kaname lucha por cumplir con su deber como vicepresidente del consejo estudiantil mientras lo mantiene bajo control.",
            "image":"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/3b5e8ba871e9b19c6b7b71aa62bdbf66.jpe",
            "rating": "8.02",
            "genre": "Comedia",
            "seasons": "1"
        },
        {
            "id": "5",
            "typeId": "1",
            "title": "Vinland Saga",
            "summary": "El joven Thorfinn creció escuchando las historias de viejos marineros que habían viajado por el océano y llegado al lugar de la leyenda, Vinland. Se dice que es cálido y fértil, un lugar donde no habría necesidad de luchar, en absoluto como el pueblo congelado en Islandia donde nació, y ciertamente no como su vida actual como mercenario. La guerra es su hogar ahora. Aunque su padre le dijo una vez, No tienes enemigos, nadie lo hace. No hay nadie a quien esté bien lastimar, a medida que crecía, Thorfinn sabía que nada estaba más lejos de la verdad.",
            "image":"https://pbs.twimg.com/media/GRPJUCqXYAAJ09T.jpg:large",
            "rating": "8.76",
            "genre": "Histórico",
            "seasons": "2"
        },
        {
            "id": "6",
            "typeId": "1",
            "title": "Kenpuu Denki Berserk",
            "summary": "Guts, un hombre que algún día será conocido como el Espadachín Negro, es un joven mercenario viajero caracterizado por la gran espada que lleva. Acepta trabajos que ofrecen la mayor cantidad de dinero, pero nunca se queda con un grupo por mucho tiempo, hasta que se encuentra con la Banda del Halcón. Emboscado después de completar un trabajo, Guts aplasta a muchos de sus miembros en combate. Griffith, el líder y fundador de The Band of the Falcon, se interesa por Guts y lo duele. Mientras que los otros no son rival para Guts, Griffith lo derrota de un solo golpe.",
            "image":"https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXfR5Z-aUmijdxdxdqGJXrEpEKXcUu6W6LHIQoQDPkW8NDMLV2Pxk2PGdIeh2lLrCiydy1PCs6xckG5Hzls_42tXHfkxzvmqurVH.jpg?r=2ff",
            "rating": "8.59",
            "genre": "Militar",
            "seasons": "1"
        }
    ]

    const peliculas = [
        {
            "id": "1",
            "typeId": "2",
            "title": "Ghost in the Shell",
            "summary": "In the year 2029, Niihama City has become a technologically advanced metropolis. Due to great improvements in cybernetics, its citizens are able to replace their limbs with robotic parts. The world is now more interconnected than ever before, and the city's Public Security Section 9 is responsible for combating corruption, terrorism, and other dangerous threats following this shift toward globalization.",
            "image":"https://c.wallhere.com/photos/0b/2e/Ghost_in_the_Shell_Kusanagi_Motoko_Production_I_G-62188.jpg!d",
            "rating": "8.27",
            "genre": "Sci-Fi",
            "duration": "1 hr. 22 min."
        },
        {
            "id": "2",
            "typeId": "2",
            "title": "Mononoken Hime",
            "summary": "When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince's arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans. As the opposing forces of nature and mankind begin to clash in a desperate struggle for survival, Ashitaka attempts to seek harmony between the two, all the while battling the latent demon inside of him. Princess Mononoke is a tale depicting the connection of technology and nature, while showing the path to harmony that could be achieved by mutual acceptance.",
            "image":"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/09/curiosidades-princesa-mononoke-obra-maestra-animacion-japonesa.jpg?tf=1200x",
            "rating": "8.66",
            "genre": "Fantasy",
            "duration": "2 hr. 13 min."
        },
        {
            "id": "3",
            "typeId": "2",
            "title": "Perfect Blue",
            "summary": "J-pop idol group CHAM! has spent the last two years entertaining its fans. Sadly, all good things must come to an end, and CHAM! must see one of its members, Mima Kirigoe, leave the group to pursue her acting career. While Mima's choice is met with a mixed response, she hopes her fans will continue to support her.",
            "image":"https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/08/07/62f0202ecdf1cf2b362ea5a0.webp",
            "rating": "8.55",
            "genre": "Psychological",
            "duration": "1 hr. 21 min."
        },
        {
            "id": "4",
            "typeId": "2",
            "title": "Paprika",
            "summary": "The world of dreams can be an incredible window into the psyche, showing one's deepest desires, aspirations, and repressed memories. One hopeful tech lab has been developing the DC Mini, a device with the power to delve into the dreams of others. Atsuko Chiba and Kosaku Tokita have been tirelessly working to develop this technology with the hopes of using it to deeply explore patients' minds and help cure them of their psychological disorders.",
            "image":"https://static.wixstatic.com/media/3cc3a3_b6826d5fa0234574adb3b23fd047b174~mv2.jpg/v1/fill/w_816,h_459,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3cc3a3_b6826d5fa0234574adb3b23fd047b174~mv2.jpg",
            "rating": "8.04",
            "genre": "Avant Garde",
            "duration": "1 hr. 30 min."
        },
        {
            "id": "5",
            "typeId": "2",
            "title": "El viaje de Chihiro",
            "summary": "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.",
            "image":"https://i0.wp.com/lascronicasdedeckard.com/wp-content/uploads/2021/05/El-viaje-de-Chihiro-Poster-Las-Cronicas-de-Deckard.jpg?w=835&ssl=1",
            "rating": "8.77",
            "genre": "Adventure",
            "duration": "2 hr. 4 min."
        },
        {
            "id": "6",
            "typeId": "2",
            "title": "The Princess and the Pilot",
            "summary": "The war between the Levamme Empire and the Amatsukami Imperium has been raging for years. In the midst of this struggle, the prince of the Levamme Empire declares his love for Juana del Moral and vows to end the war in one year, as part of his marriage proposal. When the Amatsukami catch wind of this, they assault the del Moral residence, targeting Juana's life. As a last ditch effort to bring the prince his bride, the San Maltilia Airforce hires a mercenary of mixed blood—a bestado—to fly Juana to the Levamme capital in secret. The pilot, Charles, accepts the mission...but traversing an ocean alone, into enemy territory, proves a much more dangerous ordeal than anyone could have anticipated.",
            "image":"https://clownfishtv.com/wp-content/uploads/2022/09/The-Princess-and-the-Pilot.jpg",
            "rating": "7.60",
            "genre": "Adventure",
            "duration": "1 hr. 39 min."
        }
        
    ]

    const sectionStyle={
        background: '#1a1919',
        height: '100vh',
        widht: '100vw',
        
    }

    const h2Style={
        color: 'white',
        margin:'0',
        paddingTop: '20px'
    }


    return<>
        <section style={sectionStyle}>
            <h2 style={h2Style}>Series</h2>
            <Carrousel data={series}/> 

            <h2 style={h2Style}>Películas</h2>
            <Carrousel data={peliculas}/>
        </section>
        </>
}

export default Section