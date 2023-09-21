const Hero = () => {
    return (
        <section
            id="intro"
            class="d-flex flex-column justify-content-center align-items-center"
        >
            <h1>Taylor Kingston</h1>
            <h3>Cardboard scrutinizer, Jedi, future Programmer</h3>
            <code> console.log("Change is inevitable");</code>
            <a href="#about">
                <span class="material-symbols-outlined" id="arrowDown">
                    expand_more
                </span>
            </a>
        </section>
    );
};

export default Hero;
