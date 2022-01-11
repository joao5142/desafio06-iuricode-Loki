setTimeout(() => {
    let svgs = document.querySelectorAll('svg');

    svgs.forEach((svg, idx) => {
        if (idx < 4) {
            svg.classList.add('yellowSvg');
        } else {
            svg.classList.add('normalSvg');
        }

    });
    console.log(svgs);
}, 500);