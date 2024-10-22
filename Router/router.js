// router.js
import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Création d'une route pour la page 404 (page introuvable)
const route404 = new Route("404", "Page introuvable", "/pages/404.html", []);

const getRouteByUrl = (url) => {
    let currentRoute = null;
    allRoutes.forEach((element) => {
        if (element.url == url) {
            currentRoute = element;
        }
    });
    if (currentRoute != null) {
        return currentRoute;
    } else {
        return route404;
    }
};

const LoadContentPage = async () => {
    const path = window.location.pathname;
    const actualRoute = getRouteByUrl(path);

    const allRolesArray = actualRoute.authorize;
    if (allRolesArray.length > 0) {
        if (allRolesArray.includes("disconnected")) {
            if (isConnected()) {
                window.location.replace("/");
            }
        } else {
            const roleUser = getRole();
            if (!allRolesArray.includes(roleUser)) {
                window.location.replace("/");
            }
        }
    }

    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    if (actualRoute.pathJS != "") {
        const scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "text/javascript");
        scriptTag.setAttribute("src", actualRoute.pathJS);
        document.querySelector("body").appendChild(scriptTag);
    }

    document.title = actualRoute.title + " - " + websiteName;

    showAndHideElementsForRoles();
};

const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    LoadContentPage();
};

window.onpopstate = LoadContentPage;
window.route = routeEvent;
LoadContentPage();
