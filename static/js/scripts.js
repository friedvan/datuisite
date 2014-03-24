function search() {
    var kw = $("#keyword").val();
    if (kw.length != 0) {
        var url = "/search/"+kw+"/";
        $.get(url, {"kw":kw}, function(data){
            alert(data);
        });
    }
    return false;
}



currentUser = '';

$(document).ready(function () {


    $('#ex1').slider({
        formater: function (value) {
            //graph(currentUser);
            return '传播概率: ' + value / 100.0;
        }
    });
    $('#ex2').slider({
        formater: function (value) {
            //graph(currentUser);
            return '粉丝层数: ' + value;
        }
    });

    $("#ex1").slider().on('slide', function() {
        graph(currentUser);
    })

    $("#ex2").slider().on('slide', function() {
        graph(currentUser);
    })



});

function graph(uid) {
    currentUser = uid;
    var fans_layer = parseInt($("#ex2").slider('getValue'));
    var srate = parseInt($("#ex1").slider('getValue')) / 100.0;
    G = jsnx.DiGraph();
    var url = '/user/' + uid + '/';
    $.getJSON(url, {'uname': uid, 'fans_layer': fans_layer, 'srate': srate}, function (data) {
        $.each(data.fans, function (k, v) {
            G.add_node(k, {group: 1});
            $.each(v, function (kk, vv) {
                G.add_node(vv, {group: 1})
                G.add_edge(vv, k);
            });

        });
        $.each(data.informed, function (k, v) {
            G.node.get(k).group = 2;
            $.each(v, function (kk, vv) {
                if (G.has_node(vv)) {
                    G.node.get(vv).group = 2;
                }
            });
        });

        var color = d3.scale.category20();
        jsnx.draw(G, {
            element: '#spreading',
            layout_attr: {
                charge: -120,
                linkDistance: 200
            },
            node_attr: {
                r: 20,
                title: function (d) {
                    return d.label;
                }
            },
            node_style: {
                fill: function (d) {
                    return color(d.data.group);
                },
                stroke: 'none'
            },
            edge_style: {
                fill: '#999'
            },
            label_style: {
                fill: 'blue'
            },
            with_labels: true
        });
    });


//    var G = jsnx.Graph();
//    G.add_node("x", {group:0});
//    G.add_node(2, {group:2});
//    G.add_nodes_from([1, 2, 3, 4], {group: 0});
//    G.add_nodes_from([5, 6, 7], {group: 1});
//    G.add_nodes_from([8, 9, 10, 11], {group: 2});
//
//    G.add_path([1, 2, 5, 6, 7, 8, 11]);
//    G.add_edges_from([
//        [1, 3],
//        [1, 4],
//        [3, 4],
//        [2, 3],
//        [2, 4],
//        [8, 9],
//        [8, 10],
//        [9, 10],
//        [11, 10],
//        [11, 9]
//    ]);


}
