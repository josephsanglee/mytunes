// SongQueue.js - Defines a backbone collection class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      this.at(0).enqueue();
    });

    this.on('enqueue', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.remove(this.at(0));

      if (this.at(0)) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(e) {
      this.remove(e);
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

});