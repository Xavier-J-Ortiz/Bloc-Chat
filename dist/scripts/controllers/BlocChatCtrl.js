(function() {
     function BlocChatCtrl(Room) {
     	// this.albumData = Fixtures.getAlbum();
        // this.songPlayer = SongPlayer;
         this.roomData = Room.all;
     }
     angular
         .module('blocChat')
         .controller('BlocChatCtrl', ['Room', BlocChatCtrl]);
 })();