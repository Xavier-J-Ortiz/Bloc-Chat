(function() {
     function RoomCtrl(Room) {
     	// this.albumData = Fixtures.getAlbum();
        // this.songPlayer = SongPlayer;
         this.roomData = Room($firebaseArray).all();
     }
     angular
         .module('blocChat')
         .controller('RoomCtrl', [ '$firebaseArray', 'Room', RoomCtrl]);
 })();