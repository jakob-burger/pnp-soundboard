import ScenesJsonData from "./scenes.json";
import CampaignsJsonData from "./campaigns.json";
import SoundsJsonData from "./sounds.json";
import Scene from "../Scene";
import Campaign from "../Campaign";
import Sound from "../Sound";
import { v4 as uuidv4 } from "uuid";

const scenes = ScenesJsonData.map((object, index) => {
  return new Scene(object.id, object.name, object.sounds);
});

const campaigns = CampaignsJsonData.map((object, index) => {
  return new Campaign(object.id, object.name, object.scenes);
});

function importAll(aRequire) {
  let soundFiles = {};
  aRequire.keys().map((item, index) => {
    return (soundFiles[item.replace("./", "")] = aRequire(item));
  });
  return soundFiles;
}

const soundFiles = importAll(
  require.context("./sounds", false, /\.(mp3|wav)$/)
);

const sounds = SoundsJsonData.map((object, index) => {
  return new Sound(
    uuidv4(),
    object.name,
    object.fileName,
    soundFiles[object.fileName],
    object.iconClass
  );
});

export function getCampaigns() {
  return campaigns;
}

export function getCampaign(id) {
  return campaigns.find((campaign) => campaign.id === id);
}

export function getScenes() {
  return scenes;
}

export function getScene(id) {
  return scenes.find((scene) => scene.id === id);
}

export function getSounds() {
  return sounds;
}
