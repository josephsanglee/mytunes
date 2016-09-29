// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    var models = this.collection.models;

    models.forEach(function(model) {
      var song = new SongQueueEntryView(model);
      this.$el.append(song.render());
    }, this);

    return this.$el;
  }

});
