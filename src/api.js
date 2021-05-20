import { mockData } from "./mockData";
import axios from 'axios';
import NProgress from 'nprogress';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const extractTitle = (events) => {
  var extractSummary = events.map((event) => event.summary);
  var summary = [...new Set(extractSummary)];
  return summary;
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

export const getEvents = async () => {
  NProgress.start();
var locations
  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();

    locations = extractLocations(mockData);
    localStorage.setItem("locations", JSON.stringify(locations));
    return mockData;
  }
  
  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `https://k3f3961h55.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}`;
    const result = await axios.get(url);
    let filtered = result.data

    if (filtered.length > 32) {
      let i = filtered.length;
      for (i; i > 32; i--) {
        filtered.pop()
      }
      console.log(filtered)
    }

    if (filtered) {
      locations = extractLocations(filtered.events);
      localStorage.setItem("lastEvents", JSON.stringify(filtered));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return filtered.events;
  }

}

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));
  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      // trying a slightly different url
      const results = await axios.get(
        "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=895193534029-j1l6kr4ic9b3gc5or0gp9h38btjpfhci.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fasoudry.github.io%2Fmeet%2F"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
}

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://k3f3961h55.execute-api.us-east-1.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};