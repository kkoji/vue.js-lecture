<template>
  <div>
    <h1>マイアドレス帳</h1>
    <table border='1' class='address-table'>
      <thead>
        <tr>
          <th>名前</th>
          <th>電話番号</th>
          <th>メールアドレス</th>
          <th>住所</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(address, index) in addresses' :key='index'>
          <td>{{ address.name }}</td>
          <td>{{ address.tel }}</td>
          <td>{{ address.email }}</td>
          <td>{{ address.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addresses: [
        {
          name: '友人１',
          tel: '090-0000-1111',
          email: 'sample1@mail.com',
          address: '東京都渋谷区'
        },
        {
          name: '友人２',
          tel: '090-2222-3333',
          email: 'sample2@mail.com',
          address: '東京都品川区'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.address-table {
  border-collapse: collapse;

  th, td {
    padding: 10px;
  }
}
</style>
