//! V2
const openSideNav = () => {
    document.querySelector('#NavTopOpenBtn')?.addEventListener('click', () => {
        document.querySelector('#NavSide')?.classList.add('active')
        document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.add('active'))
    })
}

const closeSideNav = () => {
    document.querySelector('#NavSideCloseBtn')?.addEventListener('click', () => {
        removeSideNavActive()
    })
}

const removeOverlay = () => {
    const overlays = document.querySelectorAll('.overlay')
    overlays?.forEach(overlay => {
        overlay.addEventListener('click', () => {
            removeSideNavActive()
        })
    })
}

const removeSideNavActive = () => {
    document.querySelector('#NavSide')?.classList.remove('active')
    document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.remove('active'))
}

const openSideNavTopic = (topic: string) => {
    document.querySelector(`#${topic}`)?.classList.add('chosen-wing');
    document.querySelector('#NavSideMainMenu')?.classList.add('left-wing');
    // document.querySelector('#NavSideMainMenu')?.classList.remove('chosen-main-wing');
    document.querySelector('#NavSideMainMenu')?.classList.remove('right-wing');

}

const closeSideNavTopic = (topic: string) => {
    document.querySelector(`#${topic}`)?.classList.add('right-wing');
    document.querySelector(`#${topic}`)?.classList.remove('chosen-wing');
    document.querySelector('#NavSideMainMenu')?.classList.remove('left-wing');
    // document.querySelector('#NavSideMainMenu')?.classList.add('chosen-main-wing');

}

export { openSideNav, closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic }


//! V1

// const openSideNav = () => {
//     document.querySelector('#nav-top-menu-bar')?.addEventListener('click', () => {
//         document.querySelector('#nav-side')?.classList.add('active')
//         document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.add('active'))
//     })
// }

// const closeSideNav = () => {
//     document.querySelector('#nav-side-menu-close')?.addEventListener('click', () => {
//         removeSideNavActive()
//     })
// }

// const removeOverlay = () => {
//     const overlays = document.querySelectorAll('.overlay')
//     overlays?.forEach(overlay => {
//         overlay.addEventListener('click', () => {
//             removeSideNavActive()
//         })
//     })
// }

// const removeSideNavActive = () => {
//     console.log("remove active")
//     document.querySelector('#nav-side')?.classList.remove('active')
//     document.querySelectorAll('.overlay')?.forEach(overlay => overlay.classList.remove('active'))
// }

// const openSideNavTopic = (topic: string) => {
//     console.log("CLICK topic", topic)
//     document.querySelector(`#${topic}`)?.classList.add('chosen-wing');
//     document.querySelector('#SIDE-MAIN-MENU')?.classList.add('left-wing');
//     document.querySelector('#SIDE-MAIN-MENU')?.classList.remove('chosen-main-wing');

// }

// const closeSideNavTopic = (topic: string) => {
//     document.querySelector(`#${topic}`)?.classList.add('right-wing');
//     document.querySelector(`#${topic}`)?.classList.remove('chosen-wing');
//     document.querySelector('#SIDE-MAIN-MENU')?.classList.remove('left-wing');
//     document.querySelector('#SIDE-MAIN-MENU')?.classList.add('chosen-main-wing');

// }

// export { openSideNav, closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic }