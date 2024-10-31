import './style/text_containers.css'

function FormulaElement({file_name, des}) {
    return (
        <>
            <div className='formula_description'>
                    {/* images_videos.css (style) */}
                    <img className="formula_img" src={"./images_videos/" + file_name.name} alt={des.content} />
                    <p className="img_vid_source_ref dark_text">{des.content}</p>
            </div>
        </>
    )
}

function RedshiftInformation() {
    return (
        <>
        <div className="article_content light_bg">
            <section className="text_container">
                <div className="title_description">
                    <p>Kosmoloogiline punanihe</p>
                </div>
                <div className="text_description">
                    <p>
                    Meist eemal olevate galaktikate poolt kiiratud valgus paistab meile punasemana. 
                    See on tingitud Universumi paisumisest. 
                    Seega footoni kosmoloogiline punanihe näitab, kui palju on universum paisunud footoni kiirgamise ajast. 
                    Mida suurem punanihe, seda kaugemalt minevikus antud objekti kiirgus (footonid) pärinevad.
                    Kasutades fotomeetrilisi väärtusi, saab masinõppe algoritmi abil umbkaudse punanihke väärtuse.
                    </p>
                </div>
                <div className='vid_description'>
                    {/* videos in images_videos.css (style) */}
                    <video autoPlay muted loop playsInline className="video_description" preload="none" width="324" height="595" poster="./images_videos/z_image.webp">
                        <source src="./images_videos/redshift_video.webm" type="video/webm" />
                    </video>
                    <p className="img_vid_source_ref light_text">NASA/JPL-Caltech//R. Hurt (Caltech-IPAC)</p>
                </div>
            </section>
        </div>
        </>
    )
}

function MLInformation() {
    return (
        <>
        <div className="article_content dark_bg">
            <section className="text_container">
                <div className="title_description">
                    <p>Masinõppe tutvustus (otsustusmets)</p>
                </div>

                <div className='img_description'>
                    {/* images in images_videos.css (style) */}
                    <img className="image_description" src="./images_videos/random_forest_img.webp" alt="Otsustusmets" />
                    <p className="img_vid_source_ref dark_text">Otsustusmets</p>
                </div>

                <div className="text_description">
                    <p>
                    Otsustuspuu loomine on sirgjooneline protsess. 
                    Peab olema olemas andmekogu: fotomeetrilised väärtused, artiklis kasutusel 9 filtrit (u - k), väärtused on korrigeeritud, ja punanihke väärtused.
                    Soovitatav normeerida x ja y väärtused, nii saab vältida ületreeningut.
                    </p>
                </div>

                {/* ln opt image */}
                <FormulaElement 
                file_name={{name: 'ln_opt_formula.webp'}}
                des={{content: 'Logaritmiline nihe dzeeta'}}
                />

                <div className="text_description">
                    <p>
                    On olemas andmete massiiv läviväärtustega, leida parim sõlm, kust poolitada. 
                    Iga läviväärtuse jaoks võimalikes läviväärtustes, leiame poolitus koha, jagades andmed kahte ossa.
                    Järgmisena kasutada dispersiooni valemit koos kaaluteguritega. 
                    Kui saadud väärtus on rangelt suurem kui hetkeline maksimaalne väärtus, uuendame objekti väärtusi.
                    Lehesõlmes olevate väärtustega saab välja arvutada keskmise väärtuse (fotomeetriline punanihe).
                    Viimaks, rekursiivselt saab vasaku ja parema alampuu, suurendades puu sügavust (muutuja n).
                    </p>

                </div>

                {/* variance reduction image */}
                <FormulaElement 
                file_name={{name: 'variance_reduction_formula.webp'}}
                des={{content: 'Dispersioon, kaalutegurid'}}
                />

                <div className="text_description">
                    <p>
                    Vaatame lähemalt otsustusmetsa ülesehitust. Kasutades <i>bootstrapp</i> funktsiooni, pakutud väärtuste dispersioon väheneb, tulemusena täpsus paraneb.
                    Sobitame otsustuspuu klassi iga n puu jaoks.
                    Iga sisendmassiivi, tähendab fotomeetrilised andmed, pakkuda välja fotomeetriline punanihe.
                    Lõpliku väärtuse saamiseks peab võtma kõikide väärtuste keskmise.
                    </p>
                </div>

                {/* average formula image */}
                <FormulaElement 
                file_name={{name: 'average_formula.webp'}}
                des={{content: 'Keskmine väärtus'}}
                />
            </section>
        </div>
        </>
    )
}

function MLValidation() {
    return (
        <>
        <div className="article_content light_bg">
            <section className="text_container">
                <div className="title_description">
                    <p>Mudeli valideerimine</p>
                </div>

                <div className="text_description">
                    <p>
                        Treenitud mudelit saab valideerida keskmise absoluutse veaga (MAE), mis antud juhul on eelistatud.
                        Võib kasutada ka keskmist ruudu viga, pole niivõrd eelistatud, sest fookus on suunatud kehvemate andmepunktide suunas.
                    </p>
                </div>

                {/* mae image */}
                <FormulaElement 
                file_name={{name: 'mae_formula.webp'}}
                des={{content: 'Keskmine absoluutne viga'}}
                />
                
                <div className="text_description">
                    <p>
                        Hajusgraafikult saab teada, et punanihetel, mis on suuremad kui 0.3, hakkab täpsus langema.
                        Mida suurem on andmekogu, seda stabiilsemad on otsustuspuud, seega väljundid sarnanevad.
                        Antud juhul leidub punanihkeid, mida pole andmetes piisavalt.
                    </p>
                </div>

                {/* images in images_videos.css (style) */}
                <div className='img_description'>
                    <img className="image_description" src="./images_videos/scatter_plot.webp" alt="Hajusgraafik, Zfot võrdlus Z" />
                    <p className="img_vid_source_ref dark_text">Hajusgraafik, Zfoto ja Z võrdlus</p>
                </div>

            </section>
        </div>
        </>
    )
}

function TextContainer() {
    return (
        <>
        {/* 1. redshift */}
        <RedshiftInformation />

        {/* 2. decision trees / forests */}
        <MLInformation />

        {/* 3. validating RFR model */}
        <MLValidation />
        </>
    )
}

export default TextContainer