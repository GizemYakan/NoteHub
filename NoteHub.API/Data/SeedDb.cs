using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteHub.API.Data
{
    public class SeedDb
    {
        public static async Task InitializeAsync(RoleManager<IdentityRole> roleManager, UserManager<ApplicationUser> userManager)
        {
            if (!await roleManager.RoleExistsAsync(Constans.Roles.ADMIN))
            {
                await roleManager.CreateAsync(new IdentityRole(Constans.Roles.ADMIN));
            }

            if (!await userManager.Users.AnyAsync(x => x.UserName == Constans.DEFAULT_EMAIL))
            {
                var user = new ApplicationUser()
                {
                    Email = Constans.DEFAULT_EMAIL,
                    UserName = Constans.DEFAULT_EMAIL
                };
                await userManager.CreateAsync(user, Constans.DEFAULT_PASSWORD);
                await userManager.AddToRoleAsync(user, Constans.Roles.ADMIN);
            }
        }
    }
}
