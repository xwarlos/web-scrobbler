export {};

Connector.trackSelector = '.track';
Connector.artistTrackSelector = '.artist';

Connector.isStateChangeAllowed = () => !isAdPlaying();
Connector.scrobblingDisallowedReason = () => Connector.isStateChangeAllowed() ? null : "IsAd";

function isAdPlaying() {
	return Util.getTextFromSelectors('.artist') === 'addyfm';
}
