import React from "react";
import Styles from "@/app/component/section/style.module.css"
import Image from "next/image";

function Section(){
    return (
        <div className={Styles.section}>
            <div className={Styles.patterns}>
                <div className={Styles.patternLeft}>
                    <Image 
                    src="/images/pattern-left.png" 
                    width={170}
                    height={2050}/>
                </div>
                <div className={Styles.patternRight}>
                    <Image 
                    src="/images/pattern-right.png"
                    width={170}
                    height={2050} />
                </div>
            </div>
            <div className={Styles.image}>
                <div className={Styles.display}>
                    <div className={Styles.imageBox}>
                        <Image 
                        src="/images/sweatshirt 1.png"
                        width={397}
                        height={554}
                        className={Styles.sweatshirt}
                        />
                    </div>
                    <div className={Styles.imageBox}>
                        <Image 
                        src="/images/kazak 1.png"
                        width={395}
                        height={554}
                        className={Styles.kazak}
                        />
                    </div>
                    <div className={Styles.imageBox}>
                        <Image
                        src="/images/tshirt 1.png"
                        width={395}
                        height={554}
                        className={Styles.tshirt}
                        />
                    </div>
                </div>
                <div className={Styles.display}>
                    <div className={Styles.imageBox}>
                        <Image 
                        src="/images/pantalon 1.png"
                        width={393}
                        height={555}
                        className={Styles.pantalon}
                        />
                    </div>
                    <div className={Styles.imageBox}>
                        <Image 
                        src="/images/ayakkabı 1.png"
                        width={394}
                        height={555}
                        className={Styles.ayakkabi}
                        />
                    </div>
                    <div className={Styles.imageBox}>
                        <Image
                        src="/images/gözlük 1.png"
                        width={391}
                        height={555}
                        className={Styles.gozluk}
                        />
                    </div>
                </div>
                <div className={Styles.display}>
                    <div className={Styles.imageBox}>
                        <Image 
                        src="/images/şapka 1.png"
                        width={395}
                        height={553}
                        className={Styles.sapka}
                        />
                    </div>
                    <div className={Styles.imageBox}>
                        <Image
                        src="/images/takı 1.png"
                        width={395}
                        height={554}
                        className={Styles.taki}
                        />
                    </div>
                </div>
            </div>
        </div>
    );s
}

export default Section;