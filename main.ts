player.onChat("Farm", function () {
    agent.teleportToPlayer()
    agent.setItem(COCOA_BEANS, 16, 1)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 4; index++) {
        agent.move(BACK, 1)
        agent.move(FORWARD, 4)
        for (let index = 0; index < 4; index++) {
            agent.move(LEFT, 1)
            agent.till(FORWARD)
            agent.place(FORWARD)
        }
    }
})
