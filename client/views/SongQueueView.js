// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('enqueue', this.render, this);
    this.collection.on('dequeue', this.render, this);
    this.collection.on('ended', this.render, this);
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function() {
    this.$el.children().detach();
    // var models = this.collection.models;
    // var html = this.$el.html('<th>Song Queue</th>');

    // models.forEach(function(model) {
    //   var song = new SongQueueEntryView(model);
    //   html.append(song.render());
    // }, this);

    // return html;

    this.$el.append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
