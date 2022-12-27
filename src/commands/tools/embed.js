const { SlashCommandBuilder, EmbedBuilder, Embed, InteractionCollector } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Return an embed"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`We'r Hanging Out..`)
        .setDescription('>,,<')
        .setColor(0xceacce)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setURL(`https://discord.gg/werhangingout`)
        .addFields([
            {
                name: `we r hanging out..`,
                value: `da`,
                inline: true
            },
        ]);

        await interaction.reply({
            embeds: [embed]
        });
    },
};