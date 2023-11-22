function Text({title, children, collapse}) {
  return(
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapse}`} aria-expanded="false" aria-controls={collapse}>
          {title}
        </button>
      </h2>
      <div id={collapse} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}
export function Accordion() {
  return(
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <Text title="Dormir una siesta" collapse="flush-collapseOne">
        <p>
          El sueño se componen de cilos de sueño de 90 min, las siestas pueden durar entre 5 min y 3 horas, una cuestion a tomar en cuenta a la hora de tomar una siesta es la hora del dia, dormir muy tarde puede hacer perder la cantidad de sueño durante la noche, lo recomendado es al rededor de la 3 p.m.; algunos estudios sugieren que tomar una siesta otorga mayor beneficio cognitivo que no hacerlo. 
        </p>
      </Text>
      <Text title="Etapas del sueño" collapse="flush-collapseTwo">
          <ul>
            <li>
              <p>Etapa 1: 2 - 5 min, esta es la etapa intermedia entre el sueño y quedarse dormido.</p>
            </li>
            <li>
              <p>Etapa 2: 30 min, la temperarura baja y los musculos se relajan, la respiracion y el ritmo cardiaco se vuelven mas regulares</p>
            </li>
            <li>
              <p>Etapa 3(sueño profundo): 20 - 30 min, aqui el cerebro suele llevar informacion de la memoria de corto plazo a la memoria de largo plazo</p>
            </li>
            <li>
              <p>Etapa 4(sueño rem): 10 - 20 min, aqui el cerebro se vuelve mas activo casi como si estuvieras despierto, esta etapa se asocia con la consolidacion de la memoria procedimental.</p>
            </li>
          </ul>
          <p>
            nota: una vez acaba la etapa del sueño REM se ha completado un ciclo de sueño, algunos cientificos concideran la etapa 3 y 4 como parte del sueño REM.
          </p>
      </Text>
      <Text title="Tiempo recomendado para la duracion de una siesta" collapse="flush-collapseThree">
        <ul>
          <li>
            <p>30 min: llega a la etapa 2 del sueño, se asocia con la potenciacion a largo plazo, al no llegar a la etapa 3 facilita que nos despertemos</p>
          </li>
          <li>
            <p>30-60 min:tiene los beneficios de la fase 2 y tambiel alcanza la fase 3, una vez llegado a la esta fase despertarse es mucho mas complicado; los efectos de la etapa 3 no surgen efecto hasta 15 min despues de despertar.</p>
          </li>
          <li>
            <p>60-90 min: aqui el sueño llega a la estapa 4 o sueño REM, algunzos investigadores sugieren que es, en esta etapa donde surgen los sueños, esta etapa es la más cercana al despertar por tanto es mas facil que nos levantemos.</p>
          </li>
        </ul>
        <p>Nota: Por lo general una persona tarda alrededor de 15 min en quedarse dormido.</p>
      </Text>
      <Text title="El sueño REM" collapse="flush-collapseFour">
        <p>Durante el sueño REM, el cerebro y el organismo se energizan y es cuando se sueña. Se considera que el sueño REM participa en el proceso de almacenamiento de recuerdos y aprendizaje y también ayuda a equilibrar el estado de ánimo</p>
        <p>El sueño REM se inicia en respuesta a las señales enviadas desde y hacia diferentes regiones del cerebro. Las señales se envían a la corteza cerebral, que es la responsable del aprendizaje, el pensamiento y la organización de información. También se envían señales a la médula espinal para detener los movimientos, lo que crea una incapacidad temporal de mover los músculos.</p>
        <p>El sueño REM estimula las regiones del cerebro que se utilizan para el aprendizaje. Los estudios han demostrado que cuando las personas son privadas del sueño REM, no logran recordar lo que se les enseñó antes de irse a dormir. La falta de sueño REM también se ha relacionado con enfermedades como las migrañas.</p>
      </Text>
      <Text title="Beneficios de una buena noche de sueño" collapse="flush-collapseFive">
        <ul>
          <li>
            <p>El sueño es una etapa crucial donde el cuerpo monitorea y equilibra sus sistemas vitales como la: circulacion, respiracion y el sistema inmune.</p>
          </li>
          <li>
            <p>El sueño tambien es crucial para el cerebro, mientras dormimos 1/5 de la sangre se va al cerebro y el periodo de sueño es de una reestructuracion intensamente activa esencial para el funcionanmiento de la memoria.</p>
          </li>
          <li>
            <p>Acorde a ciertas investigaciones acostarse 3 horas despues de estudiar y 1 hora despues de practicar una habilidad (Ejm: tocar el piano) seria lo ideal para consolidar lo aprendido.</p>
          </li>
        </ul>
      </Text>
      <Text title="Consecuencias de no dormir" collapse="flush-collapseSix">
        <ul>
          <li>
            <p>Cuando dormimos poco el aprendizaje, la memoria, el estado de aniño y el tiempo de reaccion se ven afectados.</p>
          </li>
          <li>
            <p>La falta de sueño tambien puede causar inflamacion, alicinaciones, aumento de la precion arterial, y algunos creen que esta vinvulado a la diabates y la obecsidad.</p>
          </li>
          <li>
            <p>Algunos estudios indican que dormir menos de 6 horas cada noche aumenta 4 veces y medio el riesgo de un accidente cerebrovascular, en comparacion con aquellos que duermen de 7 a 8 horas.</p>
          </li>
        </ul>
      </Text>
      <Text title="Cuanto tiempo dormir segun tu edad" collapse="flush-collapseSeven">
        <ul>
          <li>
            <p>Recién nacidos (0-3 meses): lo ideal es que duerman entre 14-17 horas cada día, aunque también es aceptable que lo hagan entre 11 y 13 horas. Lo que no se aconseja es dormir más de 18 horas.</p>
          </li>
          <li>
            <p>Bebés (4-11 meses): se recomienda que duerman entre 12-15 horas. También es aceptable que descansen entre 11 y 13 horas, pero nunca más de 16 o 18 horas.</p>
          </li>
          <li>
            <p>Niños pequeños (1-2 años): no es recomendable que duerman menos de 9 horas y más de 15 o 16. Lo que se aconseja es que descansen entre 11 y 14 horas.</p>
          </li>
          <li>
            <p>Niños en edad preescolar (3-5 años): entre 10-13 horas sería lo adecuado. Los expertos consideran que menos que 7 y más de 12 no sería aconsejable.</p>
          </li>
          <li>
            <p>Niños en edad escolar (6-13): lo recomendable sería dormir entre 9 y 11 horas.</p>
          </li>
          <li>
            <p>Adolescentes (14-17 años): el rango de sueño aumentó en una hora a 10,08 horas (antes era entre 8,5 y 9,5)</p>
          </li>
          <li>
            <p>Adultos más jóvenes (18 a 25 años): entre 7-9 horas al día, y no menos de 6 ni más de 10-11.</p>
          </li>
          <li>
            <p>Adultos (26-64 años): lo ideal sería dormir entre 7 y 9 horas, aunque no siempre se logra.</p>
          </li>
          <li>
            <p>Adultos mayores (de 65 años): lo saludable es descansar entre 7-8 horas al día. Sin embargo, es frecuente que la calidad del sueño se vea reducida.</p>
          </li>
        </ul>
      </Text>
      {/* <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            El sueño rem
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Cuanto tiempo tarda una persona en quedarse dormido
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Cuanto tiempo debe durar una siesta
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div> 
      </div>*/}
    </div>
  )
}