(function() {
     function RoomCtrl(Room) {
     	// this.albumData = Fixtures.getAlbum();
        // this.songPlayer = SongPlayer;
         this.roomData = Room.all;
     }
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();