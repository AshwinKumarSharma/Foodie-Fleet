export const CDN_IMG = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_API = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=');

export const baseURL = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?')

export const getRestaurantDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    return await response.json();
};
