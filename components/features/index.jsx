import styles from './features.module.scss'
import icon from '../../public/images/IconFeature.svg'
import Image from 'next/image'

export const Features = () => {
    return (
        <div className={styles.container}>
            <h1>
                Neste Bairro não há agência Melhor. Garantimos.
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a maiores et fugiat 
                sint molestias provident sed debitis commodi ullam eius asperiores consequuntur 
                earum aliquid nostrum aliquam, saepe rerum illo!
            </p>
            <div className={styles.contFeatures}>
                <div className={styles.feature}>
                    <Image src={icon} alt='iconFeature'/>
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur reiciendis, vel assumenda excepturi
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={icon} alt='iconFeature'/>
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur reiciendis, vel assumenda excepturi
                    </p>
                </div>
                <div className={styles.feature}>
                   <Image src={icon} alt='iconFeature'/>
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur reiciendis, vel assumenda excepturi
                    </p>
                </div>
                <div className={styles.feature}>
                    <Image src={icon} alt='iconFeature'/>
                    <h1>Digital Strategy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur reiciendis, vel assumenda excepturi
                    </p>
                </div>
            </div>
        </div>
    )
}