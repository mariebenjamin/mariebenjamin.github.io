blueimp.Gallery(
    document.getElementById('links'),
    {
        onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
            node.empty();
            if (text) {
                node[0].innerHTML = text;
            }
        }
    }
); 
