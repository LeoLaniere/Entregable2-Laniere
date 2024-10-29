const productos = [
    {
        id: "TT-TRAILBLAZER-XT",
        name: "TrailBlazer XT",
        price: 150,
        image: "/img/trailblazer_xt.webp",
        idcategory: "todo-terreno",
        description: "El TrailBlazer XT es un neumático robusto diseñado para usuarios que buscan aventura fuera de la carretera. Perfecto para vehículos todo terreno, ofrece una tracción óptima en terrenos irregulares como tierra, barro y grava. Su diseño reforzado permite una resistencia mayor ante piedras y otros obstáculos que se encuentran en caminos accidentados, lo que le da una durabilidad impresionante."
    },
    {
        id: "TT-MUDMASTER-PRO",
        name: "MudMaster Pro",
        price: 180,
        image: "/img/mudmaster_pro.webp",
        idcategory: "todo-terreno",
        description: "El MudMaster Pro es ideal para los terrenos más exigentes y fangosos. Con un patrón de rodadura diseñado específicamente para expeler barro y agua, mantiene una adherencia excelente en condiciones difíciles. Este neumático es la opción ideal para quienes enfrentan caminos de difícil acceso y requieren máxima tracción en superficies blandas y desafiantes."
    },
    {
        id: "PS-SPEEDSTER-ZR",
        name: "Speedster ZR",
        price: 220,
        image: "/img/speedster_zr.webp",
        idcategory: "pista",
        description: "El Speedster ZR es un neumático de alto rendimiento diseñado para una experiencia superior en pista y carretera. Ideal para autos deportivos, ofrece una precisión de manejo excepcional y una adherencia sobresaliente en curvas a alta velocidad. Su compuesto especial y diseño permiten un desgaste uniforme, proporcionando al usuario una combinación perfecta de velocidad, seguridad y durabilidad."
    },
    {
        id: "PS-TRACKFURY-RS",
        name: "TrackFury RS",
        price: 250,
        image: "/img/trackfury_rs.webp",
        idcategory: "pista",
        description: "El TrackFury RS es el neumático definitivo para los entusiastas de las carreras. Con una estructura reforzada y un diseño de banda de rodadura que maximiza el contacto con el asfalto, permite un rendimiento superior en circuitos de alta velocidad. Este modelo es ideal para conductores que buscan una conducción estable y segura en la pista, con una respuesta rápida en las curvas y un frenado preciso."
    },
    {
        id: "SN-FROSTGRIP-X",
        name: "FrostGrip X",
        price: 190,
        image: "/img/frostgrip_x.webp",
        idcategory: "nieve",
        description: "El FrostGrip X es un neumático especializado en condiciones invernales, diseñado para ofrecer tracción y seguridad en carreteras cubiertas de hielo y nieve. Su banda de rodadura está compuesta de un material flexible que asegura un buen rendimiento a bajas temperaturas, mientras que sus surcos profundos ayudan a desalojar la nieve y mejorar la tracción en superficies resbaladizas."
    },
    {
        id: "SN-ICECRUISER-V2",
        name: "IceCruiser V2",
        price: 210,
        image: "/img/icecruiser_v3.webp",
        idcategory: "nieve",
        description: "El IceCruiser V2 es ideal para manejar en condiciones de invierno extremo. Ofrece un diseño agresivo y compuesto avanzado para una adherencia superior en superficies heladas. Sus laminillas en forma de zigzag mejoran el contacto con la carretera, aumentando la estabilidad y la seguridad en condiciones de baja tracción. Es ideal para quienes buscan confianza y control en climas fríos y carreteras nevadas."
    },
    {
        id: "DS-DUNERIDER-XT",
        name: "DuneRider XT",
        price: 170,
        image: "/img/dunerider_xt.webp",
        idcategory: "desierto",
        description: "Diseñado para entornos áridos y arenosos, el DuneRider XT es ideal para conquistar el desierto. Este neumático cuenta con un diseño de banda ancho y fuerte, perfecto para traccionar en la arena sin hundirse. Además, su resistencia a altas temperaturas permite que se desempeñe adecuadamente en condiciones climáticas extremas."
    },
    {
        id: "DS-SANDSTORM-XTREME",
        name: "SandStorm Xtreme",
        price: 200,
        image: "/img/sandstorm_xtreme.webp",
        idcategory: "desierto",
        description: "El SandStorm Xtreme es el neumático definitivo para los amantes de la arena y los terrenos desérticos. Su construcción ligera pero robusta facilita la flotación en arenas profundas, mientras que sus refuerzos laterales mejoran la resistencia contra cortes y pinchazos, proporcionando estabilidad y maniobrabilidad en el desierto."
    }
];


const getProducts = () => {
    return new Promise ( (resolve, reject) =>{
        setTimeout ( ()=>{
            resolve (productos)
        }, 2000)
    })
}

export { getProducts }