import styled from "styled-components";

const Container = styled.section`
  .nav__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    padding: 25px 100px;
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-family: Cairo;

    .dropdown-item.selected {
      color: #ff2800;
      background-color: #fff;
    }
    &--list {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    &_sidebar {
      display: none;
    }

    &--item {
      color: #2f354d;
      font-weight: 600;
      min-width: 50px;
      &.ltr {
        a.active {
          position: relative;
          color: #ff2800;
          &::before {
            content: "";
            border-radius: 4px;
            position: absolute;
            width: 30px;
            border: 2px solid #ff2800;
            height: 0;
            bottom: -10px;
            left: 0;
          }
        }
      }
      &.rtl {
        a.active {
          position: relative;
          color: #ff2800;
          &::before {
            content: "";
            border-radius: 4px;
            position: absolute;
            width: 30px;
            border: 2px solid #ff2800;
            height: 0;
            bottom: -10px;
            right: 0;
          }
        }
      }

      .get__start {
        padding: 8px 24px;
        text-align: center;
        width: 112px;
        height: 40px;
        line-height: 20px;

        background: #ff2800;
        border-radius: 7px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
      }
      .nav__language {
        border: 1px solid #ff2800;
        margin: 0 0 0 10px;
        padding: 4px 8px;
        border-radius: 7px;
        color: #2f354d;
      }
      a {
        color: #2f354d;
      }
    }

    .menu__icon {
      display: none;
    }

    @media (max-width: 992px) {
      z-index: 10;
      justify-content: center;
      position: fixed;
      background-color: #fff;
      width: 100%;
      &--list {
        display: none;
      }
      .menu__icon {
        display: block;
        position: absolute;
        right: 20px;
        top: 35%;
        display: flex;
        gap: 6px;
        flex-direction: column;
        span {
          border: 2px solid #2f354d;
          width: 30px;
          border-radius: 4px;
          background-color: #2f354d;
          height: 1px;
        }
      }

      &_sidebar {
        background-color: #38383830;
        position: fixed;
        height: 110vh;
        width: 100vw;
        top: 0;
        right: 100vw;
        z-index: 10;
        transition: all 0.2s ease-in-out;
        display: flex;
        &.active {
          justify-content: flex-end;
          left: 0;
          .modal {
            margin-left: 30vw;
          }
        }
        .modal {
          transition: all 0.1s ease-in-out;
          display: flex;
          flex-direction: column;
          background-color: #fff;
          width: 70vw;
          right: 0;
          margin-left: 100vw;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          .logo {
            padding: 40px 25px 20px;
          }
          &--item {
            padding: 16px 0;
            margin: 0 16px;
            color: #2f354d;
            font-weight: 600;
            border-bottom: 1px solid #c9c9c9;
            a {
              color: #2f354d;
              &:hover {
                color: #ff2800;
              }
            }
            .nav-link.active {
              position: relative;
              color: #ff2800;
            }
          }
          .languges {
            padding: 12px 0;
            margin: 16px;
            .lang__btn {
              padding: 8px 8px;
              text-align: center;
              width: 112px;
              height: 35px;
              background: #fff;
              border-radius: 7px;
              color: #2f354d;
              text-decoration: none;
              cursor: pointer;
              margin: 30px 0;
              &.active {
                background: #ff2800;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;

export default Container;
