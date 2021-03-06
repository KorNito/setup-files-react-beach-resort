import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;

    if(loading) {
        return <Loading/>;
    } else {
        return (
            <>
                <RoomsFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
            </>
        );
    }
}

export default withRoomConsumer(RoomContainer)

// Without highier tier component

// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;

//                     if(loading) {
//                         return <Loading/>;
//                     } else {
//                         return (
//                             <div>
//                                 Hello from Rooms Container
//                                 <RoomsFilter rooms={rooms} />
//                                 <RoomList rooms={sortedRooms} />
//                             </div>
//                         );
//                     }
//                 }
//             }
//         </RoomConsumer>
//     );
// }
