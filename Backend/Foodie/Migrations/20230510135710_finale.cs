using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Foodie.Migrations
{
    /// <inheritdoc />
    public partial class finale : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "city",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "flatno",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "state",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "street",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "zipCode",
                table: "Users",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "city",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "flatno",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "state",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "street",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "zipCode",
                table: "Users");
        }
    }
}
