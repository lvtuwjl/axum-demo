"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[928], {
    3928: function (e, t, n) {
        n.r(t), n.d(t, {
            ChatItem: function () {
                return o
            }, ChatList: function () {
                return h
            }
        });
        var i = n(9268), s = n(9862), c = n(1034), a = n.n(c), d = n(1180), l = n(3492), r = n(103);

        function o(e) {
            return (0, i.jsx)(d._l, {
                draggableId: "".concat(e.id),
                index: e.index,
                children: t => (0, i.jsxs)("div", {
                    className: "".concat(a()["chat-item"], " ").concat(e.selected && a()["chat-item-selected"]),
                    onClick: e.onClick,
                    ref: t.innerRef, ...t.draggableProps, ...t.dragHandleProps,
                    children: [(0, i.jsx)("div", {
                        className: a()["chat-item-title"],
                        children: e.title
                    }), (0, i.jsxs)("div", {
                        className: a()["chat-item-info"],
                        children: [(0, i.jsx)("div", {
                            className: a()["chat-item-count"],
                            children: r.ZP.ChatItem.ChatItemCount(e.count)
                        }), (0, i.jsx)("div", {className: a()["chat-item-date"], children: e.time})]
                    }), (0, i.jsx)("div", {
                        className: a()["chat-item-delete"],
                        onClick: e.onDelete,
                        children: (0, i.jsx)(s.Z, {})
                    })]
                })
            })
        }

        function h() {
            let [e, t, n, s, c] = (0, l.aK)(e => [e.sessions, e.currentSessionIndex, e.selectSession, e.removeSession, e.moveSession]),
                r = (0, l.aK)(), h = e => {
                    let {destination: t, source: n} = e;
                    t && (t.droppableId !== n.droppableId || t.index !== n.index) && c(n.index, t.index)
                };
            return (0, i.jsx)(d.Z5, {
                onDragEnd: h,
                children: (0, i.jsx)(d.bK, {
                    droppableId: "chat-list",
                    children: s => (0, i.jsxs)("div", {
                        className: a()["chat-list"],
                        ref: s.innerRef, ...s.droppableProps,
                        children: [e.map((e, s) => (0, i.jsx)(o, {
                            title: e.topic,
                            time: e.lastUpdate,
                            count: e.messages.length,
                            id: e.id,
                            index: s,
                            selected: s === t,
                            onClick: () => n(s),
                            onDelete: () => r.deleteSession(s)
                        }, e.id)), s.placeholder]
                    })
                })
            })
        }
    }
}]);