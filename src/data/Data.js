import ScenesJsonData from "./scenes.json";
import CampaignsJsonData from "./campaigns.json";
import SoundsJsonData from "./sounds.json";
import Scene from "../utils/Scene";
import Campaign from "../utils/Campaign";
import Sound from "../utils/Sound";
import { v4 as uuidv4 } from "uuid";

const scenes = ScenesJsonData.map((object, index) => {
  return new Scene(object.id, object.name, object.image, object.sounds);
});

const campaigns = CampaignsJsonData.map((object, index) => {
  return new Campaign(object.id, object.name, object.image, object.scenes);
});

const sounds = SoundsJsonData.map((object, index) => {
  return new Sound(
    uuidv4(),
    object.name,
    object.fileName,
    object.link,
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

export function getSound(name) {
  return sounds.find((sound) => sound.name === name);
}
