import React from 'react';
import cls from './HomePage.module.scss'
import Bg from '../../../shared/assets/Banner1.png'
import Footer from '../../../shared/assets/footer.png'

const HomePage = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionWrapper}>
                <div className={cls.contentWrapper}>
                    <h1 className={cls.contentTitle}>Title</h1>
                    <p className={cls.contentText}>
                        инновационный, современный продукт от романа чечёткина
                    </p>
                    <div className={cls.btnWrapper}>
                        <button className={cls.homeBtn}>море</button>
                        <button className={cls.homeBtn}>детали</button>
                    </div>
                </div>
                <img className={cls.img} src={Bg} />
            </div>
            <img src={Footer} className={cls.footer}/>
        </section>
    );
};

export default HomePage;
