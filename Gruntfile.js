module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },

            controllers: {
                src:  "client/scripts/controllers/controller.js",
                dest: "server/public/assets/scripts/controllers/controller.min.js"
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularmaterial: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular-material/angular-material.min.js',
                    'angular-material/angular-material.min.css'
                ],
                "dest": 'server/public/vendors/'
            },
            angularanimiate: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular-animate/angular-animate.min.js',
                    'angular-animate/angular-animate.min.js.map',
                ],
                "dest": 'server/public/vendors'
            },
            angulararia: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular-aria/angular-aria.min.js',
                    'angular-aria/angular-aria.min.js.map'
                ],
                "dest": 'server/public/vendors/'
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularCharts: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular-chart.js/dist/angular-chart.min.js',
                    'angular-chart.js/dist/angular-chart.css.map',
                    'angular-chart.js/dist/angular-chart.min.js.map',
                    'angular-chart.js/dist/angular-chart.css',
                    'angular-chart.js/dist/angular-chart.js'
                ],
                "dest" : 'server/public/vendors'
            },
            angularDragDrop: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'angular-dragdrop/src/angular-dragdrop.js',
                    'angular-dragdrop/src/angular-dragdrop.min.js'
                ],
                "dest": "server/public/vendors"
            },
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'jquery/dist/jquery.js',
                    'jquery/dist/jquery.min.js',
                    'jquery/dist/jquery.min.map'
                ],
                "dest": "server/public/vendors"
            },
            jqueryUI: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'jquery-ui/jquery-ui.js'
                ],
                "dest": "server/public/vendors"
            },
            charts : {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'chart.js/Chart.min.js'
                ],
                "dest": 'server/public/vendors'
            },
            html: {
                expand: true,
                cwd: "client",
                src: "views/index.html",
                dest: "server/public/assets/"
            },
            htmlRoutes: {
                expand: true,
                cwd: "client",
                src: [
                    "views/routes/about.html",
                    "views/routes/approute.html",
                    "views/routes/contact.html",
                    "views/routes/register.html",
                    "views/routes/home.html",
                    "views/routes/event.html",
                    "views/routes/results.html",
                    "views/routes/login.html",
                    "views/routes/header.html"

                ],
                dest: "server/public/assets/"
            },
            photos: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/photos/red_rock.png",
                    "styles/photos/yellow_rock.png",
                    "styles/photos/curling_house.png",
                    "styles/photos/world_curl.png",
                    "styles/photos/gmail.png"
                ],
                "dest": 'server/public/assets'
            },
            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/style.css"
                ],
                "dest": "server/public/assets"
            },

            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
