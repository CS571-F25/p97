import EventCard from "../components/EventCard";
import SuggestionBox from "../components/SuggestionBox";

export default function Events(){
    return (
        <div>
            <h1>Upcoming Events</h1>

            {/*TODO: Create API to dynamically update events using fetch and map to EventCard elements */}
            {/*TODO: Add a special styling for events currently happening! */}
            <h1>Past Events</h1>

            {/*TODO: Filter events displayed for past events in parent */}
            <h2 className="mt-4">Suggestions</h2>
            <SuggestionBox />
        </div>
    );
}