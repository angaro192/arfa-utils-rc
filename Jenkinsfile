node {
  stage('Checkout SCM') {
    git branch: 'dev', url: 'https://github.com/angaro192/augusto.git'
  }

  stage('Install node modules') {
    sh "npm install"
  }

  stage('Build') {
    sh 'npm run build'
  }

  stage('Copy') {
    sh 'cp -a /var/lib/jenkins/workspace/angular-pipeline/dist/augusto/. /var/www/jenkins_augusto/html'
  }
}
