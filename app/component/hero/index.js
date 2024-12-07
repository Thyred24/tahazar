import React from "react";
import Styles from "@/app/component/hero/styles.module.css"
import Image from "next/image";

function Hero(){
    return (
        <div>
            <div className={Styles.elips} title="Dark Mode"></div>
            <div className={Styles.wrapper}>
                <div className={Styles.heroLeft}>
                    <h1 className={Styles.title}>
                        Sizin İçin Çalışıyoruz
                    </h1>
                    <p className={Styles.overview}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vehicula massa in enim luctus. Rutrum arcu.Lorem ipsum 
                    dolor sit amet, consectetur adipiscing elit. 
                    Vehicula massa in enim luctus. Rutrum arcu.
                    </p>
                </div>
                <div className={Styles.heroSvg}>
                    <Image src="hero-svg.svg" width={830} height={785}/>
                </div>
                <div className={Styles.poster}>
                    <div className={Styles.posterOverlay}></div>
                    <Image 
                    src="images/hero-image.png"
                    unoptimized
                    fill />
                </div>
            </div>
        </div>
    );
}

export default Hero;