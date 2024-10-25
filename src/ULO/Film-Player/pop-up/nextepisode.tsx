import { Show } from 'solid-js';
import './nexepisode.css';

interface NextEpisodePopupProps {
  isVisible: boolean;
  episodeNumber: number;
  title: string;
  description: string;
  thumbnail: string;
}


function NextEpisodePopup(props: NextEpisodePopupProps) {
  return (
    <Show when={props.isVisible}>
      <div class="next-episode-popup">
        <div class="popup-header">
          Episode berikutnya
        </div>
        <div class="popup-content">
          <img 
            src={props.thumbnail} 
            alt={`Episode ${props.episodeNumber}`} 
            class="thumbnail"
          />
          <div class="episode-info">
            <div class="episode-title">
              <span class="episode-number">{props.episodeNumber}.</span>
              <span>Episode {props.episodeNumber}</span>
            </div>
            <p class="episode-description">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </Show>
  );
}

export default NextEpisodePopup;