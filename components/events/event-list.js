import { View, Text, RefreshControl, FlatList } from "react-native";
import { Dummy_DATA } from "../../data/dummy";
import EventItem from "./event-item";
const EventList = () => {
    const renderItem = ({ item }) => {
        return <EventItem id={item.id} title={item.title} description={item.description} />
    }
    return (
        <View>
            <FlatList
                data={Dummy_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => {console.log("refreshing...");
                        }}
                    />
                }
            />        
        </View>
    );
}
export default  EventList;