// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(data) {
    return data.results;
  },

  initialize: function() {
    this.fetch().then(function() {
      console.log('joe cool 52 points ');
    });

    
    
    // var ajax1 = function() {
    //   return $.ajax({
    //     url: "https://api.parse.com/1/classes/songs/",
    //     type: "GET",
    //     'Content-Type': 'application/json',
    //   });
    // };

    // $.when(ajax1()).done(function(a1) {
    //   a1.results.forEach(function(song) {
    //     context.add(song);
    //   });
    // });
  }
});
